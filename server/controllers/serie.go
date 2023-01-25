package controllers

import (
	"fmt"
	"github.com/JosseMontano/go-series/database"
	"github.com/JosseMontano/go-series/models"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

func AllSeries(c *fiber.Ctx) error {
	var series []models.Serie
	database.DB.Preload("Chapters").Find(&series)
	return c.JSON(series)
}

func CreateSerie(c *fiber.Ctx) error {
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

	serie := models.Serie{
		Id:          id.String(),
		Title:       serieDto["title"].(string),
		Description: serieDto["description"].(string),
		Chapters:    chapters,
	}

	database.DB.Create(&serie)

	return c.JSON(serie)

}

func UpdateSerie(c *fiber.Ctx) error {

	idParam := c.Params("id")

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

	var result interface{}
	fmt.Print(idParam)
	database.DB.Table("series_chapters").Where("serie_id", idParam).Delete(result)

	serie := models.Serie{
		Id:          idParam,
		Title:       serieDto["title"].(string),
		Description: serieDto["description"].(string),
		Chapters:    chapters,
	}

	database.DB.Debug().Model(&serie).Updates(serie)

	return c.JSON(serie)
}

func DeleteSerie(c *fiber.Ctx) error {
	id := c.Params("id")

	serie := models.Serie{
		Id: id,
	}

	database.DB.Delete(&serie)

	c.Status(200)
	return c.JSON(fiber.Map{
		"message": "delete successfully",
	})

}
