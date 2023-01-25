package database

import (
	"github.com/JosseMontano/go-series/models"
	"github.com/JosseMontano/go-series/utils"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	host := utils.DotEnvVariable("HOST")
	user := utils.DotEnvVariable("USER")
	password := utils.DotEnvVariable("PASSWORD")
	dbName := utils.DotEnvVariable("DBNAME")
	port := utils.DotEnvVariable("PORT")

	DSN := "host=" + host + " user=" + user + " password=" + password + " dbname=" + dbName + " port=" + port

	database, err := gorm.Open(postgres.Open(DSN), &gorm.Config{})

	if err != nil {
		panic("Could not connect to database")
	}

	DB = database

	database.AutoMigrate(models.User{})
	database.AutoMigrate(models.Chapter{})
	database.AutoMigrate(models.Series{})
}
