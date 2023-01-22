package controllers

import (
	"github.com/JosseMontano/go-series/database"
	"github.com/JosseMontano/go-series/models"
	"github.com/JosseMontano/go-series/utils"
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
	"gopkg.in/gomail.v2"
	"time"
)

var validate = validator.New()

func ValidateStructSingUp(user models.User) []*models.ValidateUser {
	var errors []*models.ValidateUser
	err := validate.Struct(user)
	if err != nil {
		for _, err := range err.(validator.ValidationErrors) {
			var element models.ValidateUser
			element.FailedFiled = err.StructNamespace()
			element.Tag = err.Tag()
			element.Value = err.Param()
			errors = append(errors, &element)
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

	if errors := ValidateStructSingUp(user); errors != nil {
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

func SingIn(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	var user models.User

	database.DB.Where("email", data["email"]).First(&user)

	if user.Id == 0 {
		c.Status(404)
		return c.JSON(fiber.Map{
			"message": "not found",
		})
	}

	if err := bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"])); err != nil {
		c.Status(400)
		return c.JSON(fiber.Map{
			"message": "incorrect password",
		})
	}

	timeExp := time.Now().Add(24 * time.Hour)
	token, err := utils.GenerateJwt(user, timeExp)
	if err != nil {
		c.SendStatus(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": err,
		})
	}

	return c.JSON(fiber.Map{
		"message": "success",
		"token":   token,
	})
}

func RecuperateAccount(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	buffer := utils.Random(5)

	msg := gomail.NewMessage()
	text := "<b>This is the code: " + buffer + "</b>"
	msg.SetHeader("From", "eljosema505@gmail.com")
	msg.SetHeader("To", data["to"])
	msg.SetHeader("Subject", "Recuperate account")
	msg.SetBody("text/html", text)
	/* 	msg.Attach("/home/User/cat.jpg") */

	gmail := utils.DotEnvVariable("GMAIL")
	codeGmail := utils.DotEnvVariable("CODE_GMAIL")
	n := gomail.NewDialer("smtp.gmail.com", 587, gmail, codeGmail)

	if err := n.DialAndSend(msg); err != nil {
		panic(err)
	}

	c.Status(200)
	return c.JSON(fiber.Map{
		"message": "the mail was sent",
	})
}
