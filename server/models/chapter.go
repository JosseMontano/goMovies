package models

type Chapter struct {
	Id          string  `json:"id" gorm:"primaryKey"`
	Title       string  `json:"title" validate:"required"`
	Description string  `json:"description" validate:"required"`
	Duration    float64 `json:"duration" validate:"required"`
	Url         string  `json:"url" validate:"required"`
}

type ValidateChapter struct {
	FailedFiled string
	Tag         string
	Value       string
}
