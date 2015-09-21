package controllers

import play.api._
import play.api.mvc._
import java.util.concurrent.TimeoutException
import scala.concurrent.ExecutionContext.Implicits.global
import play.api.Logger
import play.api.Play
import play.api.Play.current
import play.api.Play.current
import play.api.i18n.Messages
import play.api.cache.Cache
import play.api.data.Form
import play.api.data.Forms._
import play.api.mvc.Action
import play.api.mvc.Controller
import play.api.mvc.Security
import java.util.concurrent.TimeoutException
import play.api.mvc.Cookie
import scala.concurrent.Future
import javax.naming.ldap.Control
import play.api.routing.JavaScriptReverseRouter
import play.api.Routes

class Application extends Controller {

  def index = Action { implicit request =>
    Ok(views.html.index("Your new application is ready."))
  }
  
  def javascriptRoutes: Action[play.api.mvc.AnyContent] = Action { implicit request =>
    
    Ok(JavaScriptReverseRouter("jsRoutes")(routes.javascript.Application.index)).as("text/javascript")
  }

}
