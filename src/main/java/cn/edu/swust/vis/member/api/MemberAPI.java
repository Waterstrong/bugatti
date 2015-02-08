package cn.edu.swust.vis.member.api;

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

/**
 * Created by water on 15-2-8.
 */
@Path("member")
@Produces("text/plain")
public class MemberAPI {
    @POST
    @Path("team")
    @Produces("text/html")
    public Response getMember(@FormParam("memberID") String memberID) {
        return Response.ok("member id : " + memberID + ", welcome to swust vis team.").build();
    }
}
