package com.swan.agora.constants;

public final class ApiConstants {
    public static final String API_URL = "/api";
    public static final String ERROR_URL = "/error";

    // Account URLs
    public static final String BASE_ACCOUNT_URL = API_URL + "/account";
    public static final String GET_ACCOUNTS_URL = "/getall/";
    public static final String GET_ACCOUNT_BY_ID = "/id/{id}";
    public static final String GET_ACCOUNT_BY_USERNAME = "/username";
    public static final String CREATE_NEW_ACCOUNT_URL = "/create_account";

    // Photo URLs
    public static final String BASE_PHOTOS_URL = API_URL + "/photos";
    public static final String GET_PHOTO_URL = "/get/{id}";
    public static final String ADD_PHOTO_URL = "/add";

    // Tiles URLs
    public static final String BASE_TILE_URL = API_URL + "/tile";
    public static final String GET_ALL_TILES_URL = "/getall";
    public static final String GET_TILES_BY_ID_URL = "/id/{id}";
    public static final String MODIFY_PROJECT_URL = "/id/{id}";
    public static final String CREATE_TILE_URL = "/createtile";
    public static final String DELETE_TILE_URL = "/id/{id}";
    public static final String DELETE_ALL_TILE = "/deleteall";

    // Projects URLs
    public static final String BASE_PROJECT_URL = API_URL + "/project";
    public static final String GET_PROJECTS_URL = "";
    public static final String GET_PROJECTS_BY_ID_URL = "/id/{id}";
    public static final String MODIFY_PROJECT_URL = "/id/{id}";
    public static final String CREATE_PROJECT_URL = "/create_project";
    public static final String DELETE_PROJECT_URL = "/id/{id}";
    public static final String DELETE_ALL_PROJECTS = "/deleteall";
}
