package models

type User struct {
	Id          uint   `json:"id"`
	Email       string `json:"email" validate:"required,min=3,max=50" gorm:"unique"`
	Password    []byte `json:"password" validate:"required"`
	PhotoUrl    string `json:"photo_url" validate:"required"`
	DisplayName string `json:"display_name" validate:"required,min=3,max=12"`
}

type ValidateUser struct {
	FailedFiled string
	Tag         string
	Value       string
}
