package middlewares

import (
	"fmt"
	"time"

	"github.com/JosseMontano/go-series/utils"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
)

func ValidateJwt(c *fiber.Ctx) error {
	secret := utils.DotEnvVariable("JWT_SECREY")
	cookie := c.Get("Token")
	token, err := jwt.Parse(cookie, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unauthenticated")
		}
		return []byte(secret), nil
	})

	if err != nil {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "Invalid token",
		})
	}

	claims := token.Claims.(jwt.MapClaims)
	exp := claims["exp"].(float64)

	if int64(exp) < time.Now().Local().Unix() {
		c.Status(400)
		return c.JSON(fiber.Map{
			"message": "token expired",
		})
	}

	return c.Next()
}
