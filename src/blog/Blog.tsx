import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

 const post1=`
 # 氣候變化對全球環境的深遠影響

_April 1, 2020 by [Olivier](/)_

氣候變化是當今世界上最嚴重的問題之一，它對我們的環境、經濟和社會都產生了深遠的影響。
本文將探討氣候變化的主要因素，以及它如何改變我們的星球，並提供一些應對氣候變化的關鍵措施。

## 氣候變化的主要因素
氣候變化主要受到溫室氣體排放的影響，包括二氧化碳（CO2）、甲烷（CH4）和氮氧化物（NOx）。
這些氣體來自人類活動，如能源生產、工業過程、農業和交通運輸。它們在大氣中累積，造成溫室效應，導致地球溫度上升。

### 影響氣候變化的環境變化
氣候變化對全球環境產生多方面的影響。
極端天氣事件變得更加頻繁和嚴重，包括颶風、洪水和乾旱。
冰川融化導致海平面上升，危及沿海城市。
生態系統遭受損害，生態多樣性減少，動植物面臨滅絕的風險。

## 經濟和社會影響
氣候變化對經濟產生了巨大的壓力。
農業受到乾旱和極端氣候事件的威脅，食品供應變得不穩定。沿海城市需要巨額投資來防止海平面上升造成的威脅。
這些變化也對社會造成不平等，影響最貧困和最弱勢的社區。

## 應對氣候變化的關鍵措施
為應對氣候變化，我們需要採取綜合性措施。
減少溫室氣體排放是關鍵，這可以通過轉向可再生能源、提高能源效率、以及改善交通運輸系統來實現。
此外，我們應該投資於氣候變化適應措施，包括防洪工程、氣象預警系統和生態恢復。

## 結論 
氣候變化是一個全球性問題，需要國際社區的協作。
我們每個人都應該承擔責任，減少自身對氣候的影響，並支持政策和措施，以應對這個關鍵挑戰，以確保我們的星球能夠持續繁榮下去。

`

const post2=`
# 人工智慧：革命性的醫療科技

_March 23, 2020 by [Matt](/)_

人工智慧（AI）已經在醫療領域帶來顯著的變革，它不僅提高了診斷的準確性，還提供了個性化治療的機會。本文將探討AI在醫療中的應用，以及它如何塑造未來的醫療保健。

## 自動診斷和影像識別
AI在醫學影像識別方面表現出色，幫助醫生快速而精確地診斷疾病。從X光片到MRI掃描，AI能夠標識病變、腫瘤和其他潛在問題，縮短了診斷時間，並減少了錯誤率。

## 個性化治療
基於患者的基因組和醫學歷史，AI能夠幫助醫生制定個性化的治療計劃。這種精確的方法使治療更加有效，同時減少了副作用。

## 醫療數據分析
AI可以處理龐大的醫療數據，發現模式和趨勢，提供新的洞察，有助於疾病預測和流行病學研究。這有助於改善公共衛生政策和醫療決策。

## 持續的挑戰
儘管AI在醫療中的潛力巨大，但還存在一些挑戰。隱私和安全問題需要嚴密管理，並確保患者數據不會被濫用。此外，醫生和護士需要適應新技術，以充分發揮其價值。

## 結論
人工智慧已經改變了醫療領域，為病人提供了更好的護理和更準確的診斷。然而，我們需要謹慎應對AI的應用，確保它不僅改進了醫療保健，還確保了數據的隱私和安全。這一技術的不斷發展將在未來塑造我們的醫療保健系統。
`

const post3=`
# New feature

_March 14, 2020 by [Tom](/)_

## Introducing AutoAssist - Your Smart Driving Companion

Hello everyone!
We are excited to introduce our latest feature - AutoAssist! 
This new feature brings many exciting improvements and opportunities.

## Key Highlights
- A significant breakthrough in autonomous driving technology, making driving safer and more convenient.
- New voice recognition functionality that allows you to have natural conversations with your vehicle.
- Integration of real-time traffic information to help you avoid congestion.

## How to Use this Feature
- To use AutoAssist, ensure that your vehicle is equipped with our latest driver assistance system.
- Once activated, you can interact with your vehicle using voice commands.

## Why You'll Love It
- AutoAssist greatly enhances driving safety, reducing risks on the road.
- It allows for easier vehicle control and provides real-time road condition information.

## User Feedback
We highly value your feedback. Please share your thoughts and suggestions after using the new feature so that we can continue to improve.

We hope you'll enjoy this new feature, as it will make your driving experience more enjoyable and efficient. If you have any questions or feedback, please feel free to reach out to us.
`

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: '「改變世界的區塊鏈」',
  description:
    "區塊鏈技術近年來備受關注，被譽為數位革命的關鍵驅動力之一。本文將深入探討區塊鏈技術的基本原理、應用領域以及對我們日常生活和商業環境所帶來的深遠影響。無論您是一位科技愛好者、企業家、或只是對新興技術的未來潛力感到好奇，這篇文章將帶您深入了解區塊鏈如何在不同領域帶來顛覆性的變革。",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: '「太空探索時代：私企的崛起」',
    date: 'Nov 12',
    description:
      '私人企業日益參與太空探索，挑戰傳統的國家航太機構。這篇文章將介紹一些領先的私人太空公司，探討它們如何改變我們對太空探索的看法，並推動著這個領域的新時代。',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: '「智能交通：自駕車和城市流動」',
    date: 'Nov 11',
    description:
      '自駕車技術正在改變交通方式和城市規劃。這篇文章將深入探討未來智能交通的趨勢，包括自駕車、交通管理系統，以及它們如何改善城市的流動性和安全性。',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'We are a passionate team of writers, researchers, and creators who are dedicated to delivering quality content. Our diverse backgrounds and expertise allow us to cover a wide spectrum of topics, and we take pride in providing you with well-researched, thought-provoking, and entertaining content.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="New Posts" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
