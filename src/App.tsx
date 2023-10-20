import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  let lists = [
    { title: "Blog Template", desc: "a template blog", link: "/blog"},
    { title: "Dashboard Template", desc: "a template", link: "/dashboard"},
    { title: "Pricing Template", desc: "a pricing page template.", link: "/pricing" },
    { title: "Checkout Template", desc: "a simple check-out page template.", link: "/checkout" },
    { title: "Sign In Template 1", desc: "a sign-in page template.", link: "/signin" },
    { title: "Sign In Template 2", desc: "a sign-in page template 2.", link: "/signinside" },
    { title: "Sign Up Template", desc: "a sign-up page template.", link: "/signup" },
  ]

  return (
    <>
        <AppBar position="relative">
        <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                Example Works
            </Typography>
        </Toolbar>
        </AppBar>
      <Container maxWidth="sm">
        <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            sx={{paddingTop: "2rem"}}
            gutterBottom
        >
            Example Works
        </Typography>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {lists.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={()=>{navigate(card.link)}}>View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </>
  );
}

export default App;
