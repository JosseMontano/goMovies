package routes

import (
	"github.com/JosseMontano/go-series/controllers"
 	"github.com/JosseMontano/go-series/middlewares" 
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World 👋!")
	})

	app.Post("/api/sign-up", controllers.SingUp)
	app.Post("/api/sign-in", controllers.SingIn)
	app.Post("/api/send-code-gmail", controllers.SendCodeToGmail)
	app.Post("/api/recuperate-account", controllers.RecuperateAccount)



	//chapters
/* 	app.Get("/api/chapters/:id", controllers.AllChapterBySerie) */
	app.Post("/api/chapters", controllers.CreateChapters)
	app.Put("/api/chapters/:id", controllers.UpdateChapters)
	app.Delete("/api/chapters/:id", controllers.DeleteChapter)

	//series
	app.Get("/api/series", controllers.AllSeries)
	app.Post("/api/series", controllers.CreateSerie)
	app.Put("/api/series/:id", controllers.UpdateSerie)
	app.Delete("/api/series/:id", controllers.DeleteSerie)

	app.Use(middlewares.ValidateJwt) 

}
