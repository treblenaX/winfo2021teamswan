package com.swan.agora.models;

import org.bson.types.Binary;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "photos")
public class Photo {
    @Id
    private ObjectId _id;
    private String title;
    private Binary image;

    public Photo(ObjectId _id, String title) {
        this._id = _id;
        this.title = title;
    }

    /** Getters and Setters */
    public void setId(ObjectId id) {
        this._id = id;
    }

    public ObjectId getId() {
        return this._id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return this.title;
    }

    public void setImage(Binary image) {
        this.image = image;
    }

    public Binary getImage() {
        return image;
    }
}
