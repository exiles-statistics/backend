import { Controller, Get, Header, Redirect } from "@nestjs/common";
import { ApiExcludeEndpoint } from "@nestjs/swagger";

@Controller({
  path: "/",
})
export class RootController {

  @Get()
  @ApiExcludeEndpoint(true)
  @Redirect("/api/v0", 301)
  @Header("X-Exilers-Redirection", "API is versioned. Use /api/v0 instead.")
  bonjour() {
    return
  }
}
