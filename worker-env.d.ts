// The template exposes D1 only when a database binding is configured.
// Keep it optional: the current hosting configuration has no D1 database.
declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
  }
}
