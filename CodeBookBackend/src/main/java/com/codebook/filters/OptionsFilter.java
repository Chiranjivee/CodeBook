package com.codebook.filters;

import javax.annotation.Priority;
import javax.ws.rs.Priorities;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

@Provider
@Priority(Priorities.USER)
public class OptionsFilter implements ContainerRequestFilter
{
    @Override
    public void
        filter(
            ContainerRequestContext containerRequest)
    {
        String method = containerRequest.getMethod();
        String path = containerRequest.getUriInfo().getPath(true);
        if (method.equals("OPTIONS"))
        {
            throw new WebApplicationException(Response.Status.OK);
        }
    }
}
