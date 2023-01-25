package controllers

import (
	"strconv"

	"github.com/JosseMontano/go-series/database"
	"github.com/JosseMontano/go-series/models"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

/*
func AllChapterBySerie(c *fiber.Ctx) error {
	id := c.Params("id")
	var chapter []models.Chapter
	database.DB.Where("id", id).Find(&chapter)
	return c.JSON(chapter)
} */

func CreateChapters(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	id := uuid.New()

	duration, _ := strconv.ParseFloat(data["duration"], 64)

	chapter := models.Chapter{
		Id:          id.String(),
		Title:       data["title"],
		Description: data["description"],
		Duration:    duration,
		Url:         data["url"],
	}

	database.DB.Create(&chapter)
	c.Status(200)
	return c.JSON(chapter)
}

func UpdateChapters(c *fiber.Ctx) error {
	idParams := c.Params("id")
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	duration, _ := strconv.ParseFloat(data["duration"], 64)

	chapter := models.Chapter{
		Title:       data["title"],
		Description: data["description"],
		Duration:    duration,
		Url:         data["url"],
	}

	database.DB.Debug().Model(models.Chapter{}).Where("id", idParams).Updates(&chapter)
	c.Status(200)
	return c.JSON(chapter)
}

func DeleteChapter(c *fiber.Ctx) error {
	id := c.Params("id")

	chapter := models.Chapter{
		Id: id,
	}

	database.DB.Delete(&chapter)

	c.Status(200)
	return c.JSON(fiber.Map{
		"message": "delete successfully",
	})
}
