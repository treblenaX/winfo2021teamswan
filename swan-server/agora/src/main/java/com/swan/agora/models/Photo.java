package com.swan.agora.models;

import org.bson.types.Binary;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "photos")
public class Photo {
    @Id
    private String _id;
    private String title;

    public Photo(String _id, String title) {
        this._id = _id;
        this.title = title;
    }

    /** Getters and Setters */
    public void setId(String id) {
        this._id = id;
    }

    public String getId() {
        return this._id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return this.title;
    }

//    public void setImageId(ObjectId imageId) {
//        this.imageId = imageId;
//    }
//
//    public ObjectId getImageId() {
//        return imageId;
//    }
}
