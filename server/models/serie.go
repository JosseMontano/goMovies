package models

type Serie struct {
	Id          string    `json:"id" gorm:"primaryKey"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Chapters    []Chapter `json:"chapters" gorm:"many2many:series_chapters"`
}
