package database

import (
	"github.com/JosseMontano/go-series/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	host := "localhost"
	user := "postgres"
	password := "8021947cbba"
	dbName := "goMovies"
	port := "5432"

	DSN := "host=" + host + " user=" + user + " password=" + password + " dbname=" + dbName + " port=" + port

	database, err := gorm.Open(postgres.Open(DSN), &gorm.Config{})

	if err != nil {
		panic("Could not connect to database")
	}

	DB = database

	database.AutoMigrate(models.User{})

}
