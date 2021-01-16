package com.swan.agora.controllers;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.swan.agora.constants.ApiConstants;
import com.swan.agora.repositories.PhotoRepository;
import com.swan.agora.services.PhotoService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping(ApiConstants.BASE_PHOTOS_URL)
public class PhotoController {
    @Autowired
    private PhotoRepository repository;
    @Autowired
    private PhotoService photoService;

    @RequestMapping(value = ApiConstants.ADD_PHOTO_URL, method = RequestMethod.POST)
    public ObjectId addPhoto(@RequestParam("title") String title, @RequestParam("image") MultipartFile image)
            throws IOException {
        DBObject metaData = new BasicDBObject();
        metaData.put(title, title + " test");

        ObjectId id = photoService.storeFile(image.getInputStream(), title, "image/jpg", metaData);
        return id;
    }

    @RequestMapping(value = ApiConstants.GET_PHOTO_URL, method = RequestMethod.GET)
    public ResponseEntity<InputStreamResource> getPhoto(@PathVariable ObjectId id, Model model) {
        try {
            GridFsResource photo = photoService.retrieveImage(id);

            return ResponseEntity.ok()
                    .contentLength(photo.contentLength())
                    .contentType(MediaType.parseMediaType(photo.getContentType()))
                    .body(photo);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
