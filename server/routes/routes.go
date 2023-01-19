package routes

import (
	"github.com/JosseMontano/go-series/controllers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World 👋!")
	})

	app.Post("/api/sign-up", controllers.SingUp)
}
