package controllers

import javax.inject.Inject

import models.MailgunServiceApi
import play.api.libs.json.Json
import play.api.mvc.{Action, Controller}
import play.api.routing.JavaScriptReverseRouter
import scala.concurrent.ExecutionContext.Implicits.global

class Application @Inject()(mailgunServiceApi: MailgunServiceApi) extends Controller {

  def index = Action { implicit request =>
    Ok(views.html.index("FitFyles"))
    //Ok(views.html.email("Harsh Sharma"))
    //Ok(views.html.contact("Harsh Sharma", "harshs316@gmail.com"))
  }

  /**
   * Sends,
   * The account confirmation mail to user
   * The details of new user to fitFyles account
   * @param name
   * @param email
   * @return
   */
  def sendMail(name: String, email: String): Action[play.api.mvc.AnyContent] = Action.async { implicit request =>
    mailgunServiceApi.sendMail(name, email) map { response =>
      Ok(Json.obj("status" -> response.statusText))
    }
  }

  def javascriptRoutes: Action[play.api.mvc.AnyContent] = Action { implicit request =>
    Ok(JavaScriptReverseRouter("jsRoutes")(routes.javascript.Application.sendMail)).as("text/javascript")
  }

}
