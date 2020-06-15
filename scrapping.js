const request = require('request');
const axios = require('axios');
const cheerio = require('cheerio');


function kompasScrapFunc(url){
    request(url,(err, res, body)=>{
        if (!err && res.statusCode == 200) {
            const $ = cheerio.load(body);
            const titles = [];
            const titleSelector = $('#general-container > div:nth-child(4) > div.col-bs10-7 > div:nth-child(4) > div[class="article__list clearfix"]');
            titleSelector.each((i,el)=>{
                const title = $(el).find('div.article__list__title > h3 > a').text();
                const link = $(el).find('div.article__list__title > h3 > a').attr('href');
                console.log(title,'\n',link,'\n');

            })
        }
    });
}

function tribunScrapFunc(url){
    request(url,(err, res, body)=>{
        if (!err && res.statusCode == 200) {
            const $ = cheerio.load(body);
            const titles = [];
            const article = $('#latestul > li[class="p1520 art-list pos_rel"]');
            article.each((i,el)=>{
                const title = $(el).find('div.mr140>h3> a').attr('title');
                const link = $(el).find('div.mr140 >h3> a').attr('href');
                console.log(title,'\n',link,'\n');
            })
        }
    });
}
kompasScrapFunc('https://www.kompas.com/');
tribunScrapFunc('https://www.tribunnews.com/')
