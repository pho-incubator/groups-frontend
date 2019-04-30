const nunjucks = require('nunjucks');

module.exports = async function (req, res) {
    if(process.env.REDIRECT!=undefined) {
        res.redirect(process.env.REDIRECT);
        return;
    }
    nunjucks.configure(__dirname + '/site/templates', { autoescape: true });

    const goal = 'show';
    const publicId = '79982844-6a27-4b3b-b77f-419a79be0e10';
    const primaryColor = '#6f879f';
    const textColor = '#3f5f7f';
    const backgroundColor = '#ffffff';
    const host = "https://gjs-singlesignon.herokuapp.com";
    const streamHost = "";
    const theme = "light";
    
    let page = req.query.page;
    if (! page) {
        return res.send('page parameter is missing');
    }
    page += '.njk';
    res.send(
        nunjucks.render(
            page,
            {
                name: 'uxlovers',
                goal,
                brand: 'Sample Page',
                about: 'Sample Page is a sample Grou.ps site.',
                public_id: publicId,
                primary_color: primaryColor,
                text_color: textColor,
                background_color: backgroundColor,
                host,
                theme,
                stream_host: streamHost,
            }
        )
    );
};

