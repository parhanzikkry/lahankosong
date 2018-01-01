var sequelize = require(__dirname + '/../dbconnection'),
    Kecamatan = sequelize.import(__dirname + '/../models/kecamatan.model');

Kecamatan
    .bulkCreate([{
        id: '3201300',
        name: 'PARUNG PANJANG',
        regency_id: '3201'
    },{
        id: '3201010',
        name: 'NANGGUNG',
        regency_id: '3201'
    },{
        id: '3201020',
        name: 'LEUWILIANG',
        regency_id: '3201'
    },{
        id: '3201021',
        name: 'LEUWISADENG',
        regency_id: '3201'
    },{
        id: '3201030',
        name: 'PAMIJAHAN',
        regency_id: '3201'
    },{
        id: '3201040',
        name: 'CIBUNGBULANG',
        regency_id: '3201'
    },{
        id: '3201050',
        name: 'CIAMPEA',
        regency_id: '3201'
    },{
        id: '3201051',
        name: 'TENJOLAYA',
        regency_id: '3201'
    },{
        id: '3201060',
        name: 'DRAMAGA',
        regency_id: '3201'
    },{
        id: '3201070',
        name: 'CIOMAS',
        regency_id: '3201'
    },{
        id: '3201071',
        name: 'TAMANSARI',
        regency_id: '3201'
    },{
        id: '3201080',
        name: 'CIJERUK',
        regency_id: '3201'
    },{
        id: '3201081',
        name: 'CIGOMBONG',
        regency_id: '3201'
    },{
        id: '3201090',
        name: 'CARINGIN',
        regency_id: '3201'
    },{
        id: '3201100',
        name: 'CIAWI',
        regency_id: '3201'
    },{
        id: '3201110',
        name: 'CISARUA',
        regency_id: '3201'
    },{
        id: '3201120',
        name: 'MEGAMENDUNG',
        regency_id: '3201'
    },{
        id: '3201130',
        name: 'SUKARAJA',
        regency_id: '3201'
    },{
        id: '3201140',
        name: 'BABAKAN MADANG',
        regency_id: '3201'
    },{
        id: '3201150',
        name: 'SUKAMAKMUR',
        regency_id: '3201'
    },{
        id: '3201160',
        name: 'CARIU',
        regency_id: '3201'
    },{
        id: '3201161',
        name: 'TANJUNGSARI',
        regency_id: '3201'
    },{
        id: '3201170',
        name: 'JONGGOL',
        regency_id: '3201'
    },{
        id: '3201180',
        name: 'CILEUNGSI',
        regency_id: '3201'
    },{
        id: '3201181',
        name: 'KELAPA NUNGGAL',
        regency_id: '3201'
    },{
        id: '3201190',
        name: 'GUNUNG PUTRI',
        regency_id: '3201'
    },{
        id: '3201200',
        name: 'CITEUREUP',
        regency_id: '3201'
    },{
        id: '3201210',
        name: 'CIBINONG',
        regency_id: '3201'
    },{
        id: '3201220',
        name: 'BOJONG GEDE',
        regency_id: '3201'
    },{
        id: '3201221',
        name: 'TAJUR HALANG',
        regency_id: '3201'
    },{
        id: '3201230',
        name: 'KEMANG',
        regency_id: '3201'
    },{
        id: '3201231',
        name: 'RANCA BUNGUR',
        regency_id: '3201'
    },{
        id: '3201240',
        name: 'PARUNG',
        regency_id: '3201'
    },{
        id: '3201241',
        name: 'CISEENG',
        regency_id: '3201'
    },{
        id: '3201250',
        name: 'GUNUNG SINDUR',
        regency_id: '3201'
    },{
        id: '3201260',
        name: 'RUMPIN',
        regency_id: '3201'
    },{
        id: '3201270',
        name: 'CIGUDEG',
        regency_id: '3201'
    },{
        id: '3201271',
        name: 'SUKAJAYA',
        regency_id: '3201'
    },{
        id: '3201280',
        name: 'JASINGA',
        regency_id: '3201'
    },{
        id: '3201290',
        name: 'TENJO',
        regency_id: '3201'
    }])