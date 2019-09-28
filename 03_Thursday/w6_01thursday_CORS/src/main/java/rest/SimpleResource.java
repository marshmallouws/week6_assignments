/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.internal.GsonBuildConfig;
import entity.Person;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author Annika
 */
@Path("simple")
public class SimpleResource {
    //private static final Gson GSON = new GsonBuilder().setPettyPrinting().create();
    private static List<Person> persons = new ArrayList<Person>();
    /*
    private static String name = "{\"id\": 1 \"name\": \"Peter\"}";

    private static ArrayList<String> names = new ArrayList<String>()
    {
        {
            add(name);
        }
    }; */
    @Context
    private UriInfo context;

    /**
     * Creates a new instance of SimpleResource
     */
    public SimpleResource() {
        //Test data.
        if(persons.isEmpty()) {
            persons.add(new Person(1, "Peter"));
        }
    }

    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String demo() {
        return "{\"msg\":\"Hello World\"}";
    }

    //Works
    @Path("/read")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        return new Gson().toJson(persons);
    }

    //Doesn't work
    @Path("/delete/{id}")
    @DELETE
    @Produces({MediaType.APPLICATION_JSON})
    public void deleteJson(@PathParam("id") int id) {
        for(Person p: persons) {
            if(p.getId() == id) {
                persons.remove(p);
            }
        }
    }
    
    // Works
    @Path("/update")
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String person) {
        Person p = new Gson().fromJson(person, Person.class);
        for(Person per: persons) {
            if(p.getId() == per.getId()) {
                per.setName(p.getName());
            } 
        }
    }

    //Works - just have to add id manually
    @Path("/create")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postJson(String person) {
        persons.add(new Gson().fromJson(person, Person.class));
    }
}
