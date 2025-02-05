---
title: Exploring the Rails 8 authentication generator
---

This month we explored the new authentication generator that ships with Rails 8.

Here's what we did:

1. Created a new Rails app.
2. Ran `rails g authentication` and explored the generated files.
3. Added [Pico CSS](https://picocss.com) (the classless version) for nice default styling.
4. Created a registration page by following [this guide by Josef Strzibny](https://nts.strzibny.name/rails-authentication-registrations).

Our rabbit trails included:

- Reading [some insane and fun facts about SQLite](https://avi.im/blag/2024/sqlite-facts).
- Puzzling out (with the help of [this Reddit discussion](https://www.reddit.com/r/ruby/comments/1eocmg6/comment/lhcjl5u/)) why the authentication generator creates a `sessions` table.
