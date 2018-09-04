package com.codebook.routes;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import java.util.HashMap;
import java.util.Map;

@Path("editor")
public class CodeEditorAPIHandler
{
    private static Map<String, StringBuilder> editorIdToContentMap = new HashMap<>();
    static
    {
        // add default session to editor map
        editorIdToContentMap.put("admin", new StringBuilder());
    }

    @GET
    @Path("/{id}/code")
    public String getEditorContent()
    {
        // Impl goes here
        return null;
    }

    @POST
    @Path("/{id}/code")
    public String updateEditorContent()
    {
        // Impl goes here
        return null;
    }

    @GET
    @Path("create-edit-session")
    public String createNewSession()
    {
        // Impl goes here
        return null;
    }
}
