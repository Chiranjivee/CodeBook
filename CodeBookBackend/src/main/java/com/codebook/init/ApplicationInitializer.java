package com.codebook.init;

import org.glassfish.jersey.server.ResourceConfig;

import javax.ws.rs.ApplicationPath;

@ApplicationPath("webapi")
public class ApplicationInitializer extends ResourceConfig
{
    public ApplicationInitializer()
    {
        packages("com.codebook");
    }
}
