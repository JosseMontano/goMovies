package utils

import (
	"time"

	"github.com/JosseMontano/go-series/models"
	"github.com/golang-jwt/jwt/v4"
)



func GenerateJwt(user models.User, timeExp time.Time) (string, error) {
	secret := DotEnvVariable("JWT_SECREY")
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)

	claims["authorized"] = true
	claims["user"] = user
	claims["exp"] = timeExp.Unix()

	return token.SignedString([]byte(secret))
}
