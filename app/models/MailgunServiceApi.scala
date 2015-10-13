package models

import com.google.inject.ImplementedBy
import play.api.Play
import play.api.libs.ws._
import scala.concurrent.Future
import play.api.Play.current

/**
 * Created by knoldus on 6/10/15.
 */
@ImplementedBy(classOf[MailgunService])
trait MailgunServiceApi {
  def sendMail(name: String, email: String): Future[WSResponse]
}

class MailgunService extends MailgunServiceApi {

  /**
   * Mailgun auth settings
   */
  val mailgunAuth = WS.url(Play.current.configuration.getString("sendBox_url").get)
    .withAuth("api", Play.current.configuration.getString("api_key").get, WSAuthScheme.BASIC)

  /**
   * Sends the account confirmation mail to user
   * @param name
   * @param email
   * @return
   */
  def sendMail(name: String, email: String): Future[WSResponse] = {
    mailgunAuth.post(
      Map(
        "from" -> Seq(Play.current.configuration.getString("from").get),
        "to" -> Seq(email),
        "subject" -> Seq(Play.current.configuration.getString("subject").get),
        "html" -> Seq((views.html.email(name, email)).toString())
      )
    )
    sendFitFylesNotification(name, email)
  }

  /**
   * Sends the details of new user to fitFyles account
   * @param name
   * @param email
   * @return
   */
  private def sendFitFylesNotification(name: String, email: String): Future[WSResponse] = {
    mailgunAuth.post(
      Map(
        "from" -> Seq(Play.current.configuration.getString("from").get),
        "to" -> Seq(Play.current.configuration.getString("fitfylesEmail").get),
        "subject" -> Seq(Play.current.configuration.getString("subject").get),
        "html" -> Seq((views.html.contact(name, email)).toString())
      )
    )
  }
}
