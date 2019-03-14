package controllers;

import play.mvc.Http.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.*;
import com.fasterxml.jackson.databind.*; 
import play.mvc.Controller;
import play.mvc.Result;
import java.sql.*;  

public class QueryRunner extends Controller{
        public Result runs(Request request) {
        JsonNode body = request.body().asJson();
        String query = body.get("query").asText();

        String dbschema = "iv3demo_adsschema";
        String username = "root";
        String password = "root";
        Connection con=null;
        ArrayNode data=new ObjectMapper().createArrayNode();
        
        
        try{
        Class.forName("com.mysql.jdbc.Driver");  
            con=DriverManager.getConnection("jdbc:mysql://localhost:3306/"+dbschema,username,password);
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while(rs.next()){
                String cat = rs.getString("cat");
                String ser = rs.getString("ser");
                JsonNode obj = new ObjectMapper().createObjectNode();
                ((ObjectNode)obj).put("cat", cat);
                ((ObjectNode)obj).put("ser", ser);
                data.add(obj);
            }
        }
        catch(Exception e){ 
            System.out.println(e);
        }
        finally{
            if(con!=null){
                try{
                    con.close();
                }
                catch(Exception e){
                    e.printStackTrace();
                }
            }
        }
        return ok(data);
    }  

}