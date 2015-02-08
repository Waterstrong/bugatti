package cn.edu.swust.vis;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.WebAppContext;

/**
 * Created by water on 15-2-8.
 */
public class VeyronServerLauncher {
    public static void main(String[] args) throws Exception
    {
        Server server = new Server(8080);
        String path = VeyronServerLauncher.class.getClassLoader().getResource(".").toString();
        path = path.substring(0, path.indexOf("bugatti")) + "bugatti/src/main/webapp";
        WebAppContext webapp = new WebAppContext(path, "");
        server.setHandler(webapp);

        server.start();
        server.join();
    }
}
