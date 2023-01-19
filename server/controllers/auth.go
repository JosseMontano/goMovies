package controllers

import (
	"github.com/JosseMontano/go-series/database"
	"github.com/JosseMontano/go-series/models"
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

var validate = validator.New()

func ValidateStructSingUp(user models.User) []*models.ValidateUser{
	var errors []*models.ValidateUser
	err := validate.Struct(user)
	if err != nil{
		for _, err := range err.(validator.ValidationErrors){
			var element models.ValidateUser
			element.FailedFiled = err.StructNamespace()
			element.Tag = err.Tag()
			element.Value = err.Param()
			errors= append(errors, &element)
		}
	}
	return errors
}

func SingUp(c *fiber.Ctx) error {
	var data map[string]string
	urlPhoto := "https://res.cloudinary.com/dny08tnju/image/upload/v1672280689/real_estates/desconocido_hgz7m2.jpg"

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	if data["password"] != data["password_confirmation"] {
		c.Status(400)
		return c.JSON(fiber.Map{
			"message": "Password do not match",
		})
	}

	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)

	user := models.User{
		Email:       data["email"],
		Password:    password,
		PhotoUrl:    urlPhoto,
		DisplayName: data["display_name"],
	}

	if errors := ValidateStructSingUp(user); errors !=nil{
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"message": errors,
		})
	}

	result := database.DB.Create(&user)

	if result.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(result.Error)
	}

	return c.JSON(user)
}
