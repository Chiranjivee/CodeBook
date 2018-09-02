package com.codebook;

import org.apache.commons.lang3.RandomStringUtils;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * Root resource (exposed at "myresource" path)
 */
@Path("editor")
public class MyResource {
    private static Map<String, StringBuilder> codeRepo = new HashMap<>();
    static {
        codeRepo.put("admin", new StringBuilder());
    }

    @GET
    @Path("{id}/code")
    @Produces(MediaType.TEXT_PLAIN)
    public Response getMyCode(@PathParam("id") String id) {
        return Response
                .ok()
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Methods", "GET, POST")
                .entity(codeRepo.get(id).toString())
                .allow("OPTIONS")
                .build();
    }

    @POST
    @Path("{id}/code")
    @Produces(MediaType.TEXT_PLAIN)
    public Response submitIt(@PathParam("id") String id, String data) {
        StringBuilder sb = new StringBuilder(data);
        codeRepo.put(id, sb);
        return
            Response
                .accepted()
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Methods", "GET, POST")
                .allow("OPTIONS")
                .build();
    }

    @GET
    @Path("createNewSession")
    @Produces(MediaType.TEXT_PLAIN)
    public Response getId() {
        String id = RandomStringUtils.randomAlphanumeric(6);
        this.codeRepo.put(id, new StringBuilder());
        return
            Response.
                accepted()
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Methods", "GET, POST")
                .allow("OPTIONS")
                .entity(id)
                .build();
    }
}
