// @GENERATOR:play-routes-compiler
// @SOURCE:/home/jonathan/Desktop/aish/MiniProject/miniproject/play/conf/routes
// @DATE:Sat Mar 09 20:39:41 IST 2019


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
