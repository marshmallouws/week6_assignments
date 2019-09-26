/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import java.util.ArrayList;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author Annika
 */
@Path("simple")
public class SimpleResource {
    private static ArrayList<String>  name = new ArrayList<String>() {
            {
                add("{\"name\": \"Peter\"}");
            }
        };
    
    
    @Context
    private UriInfo context;

    /**
     * Creates a new instance of SimpleResource
     */
    public SimpleResource() {
        
    }
    
    /**
     * Retrieves representation of an instance of rest.SimpleResource
     * @return an instance of java.lang.String
     */
    @Path("/read")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        return new Gson().toJson(name);
    }
    
    @Path("/delete/{name}")
    @DELETE
    @Produces({MediaType.APPLICATION_JSON})
    public void deleteJson() {
        
    }

    /**
     * PUT method for updating or creating an instance of SimpleResource
     * @param content representation for the resource
     */
    @Path("/update")
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String person) {
    }
    
    @Path("/create")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postJson(String person) {
        name.add(new Gson().toJson(person));
    }
}
