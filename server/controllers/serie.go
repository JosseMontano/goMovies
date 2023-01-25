package controllers

import (
	"github.com/JosseMontano/go-series/database"
	"github.com/JosseMontano/go-series/models"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

func AllSeries(c *fiber.Ctx) error {
	var series []models.Series
	database.DB.Preload("Chapters").Find(&series)
	return c.JSON(series)
}

func CreateSeries(c *fiber.Ctx) error {
	var serieDto fiber.Map

	if err := c.BodyParser(&serieDto); err != nil {
		return err
	}

	list := serieDto["chapters"].([]interface{})
	chapters := make([]models.Chapter, len(list))

	for i, chapterId := range list {
		id, _ := chapterId.(string)
		chapters[i] = models.Chapter{
			Id: id,
		}
	}

	id := uuid.New()


	serie := models.Series{
		Id:          id.String(),
		Title:       serieDto["title"].(string),
		Description: serieDto["description"].(string),
		Chapters:    chapters,
	}

	database.DB.Create(&serie)

	return c.JSON(serie)

}
