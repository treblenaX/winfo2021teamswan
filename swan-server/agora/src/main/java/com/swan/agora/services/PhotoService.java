package com.swan.agora.services;

import com.mongodb.DBObject;
import com.mongodb.client.gridfs.model.GridFSFile;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;

@EnableMongoRepositories(basePackages = "com.swan.agora.repositories")
@Service
public class PhotoService {
    @Autowired
    GridFsOperations gridFsOperations;

    public ObjectId storeFile(InputStream inputStream, String fileName, String contentType, DBObject metaData) {
        ObjectId fileId = gridFsOperations.store(inputStream, fileName, contentType, metaData);

        return fileId;
    }

    public GridFsResource retrieveImage(ObjectId id) throws IOException {
        GridFSFile file = gridFsOperations.findOne(new Query(Criteria.where("_id").is(id)));

        return gridFsOperations.getResource(file);
    }
}
