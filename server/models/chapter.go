package models

type Chapter struct {
	Id          string  `json:"id" gorm:"primaryKey"`
	Title       string  `json:"title"`
	Description string  `json:"description"`
	Duration    float64 `json:"duration"`
	Url         string  `json:"url"`
}
