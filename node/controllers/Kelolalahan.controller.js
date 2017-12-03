var sequelize = require(__dirname + '/../dbconnection'),
    Desakel = sequelize.import(__dirname + '/../models/desakel.model'),
    Pemilik = sequelize.import(__dirname + '/../models/pemilik.model'),
    Provinsi = sequelize.import(__dirname + '/../models/provinsi.model'),
    KabKota = sequelize.import(__dirname + '/../models/kabkota.model'),
    Kecamatan = sequelize.import(__dirname + '/../models/kecamatan.model'),
    Lahan = sequelize.import(__dirname + '/../models/lahan.model'),
    Foto = sequelize.import(__dirname + '/../models/foto.model'),
    Pengelolaan = sequelize.import(__dirname + '/../models/pengelolaan.model'),
    Pengelolaanlahan = sequelize.import(__dirname + '/../models/pengelolaanlahan.model'),
    Kemitraan = sequelize.import(__dirname + '/../models/kemitraan.model'),
    Kemitraanlahan = sequelize.import(__dirname + '/../models/kemitraanlahan.model');

class Kelolalahan {
    constructor() {

    }

    HapusLahanPilihan(data, res) {
        Foto
            .destroy({
                where: {
                    fk_id_lahan: data.params.id
                }
            })
            .then((info) => {
                Lahan
                    .destroy({
                        where: {
                            id: data.params.id
                        }
                    })
                    .then((info) => {
                        res.json({status: true, code: 200, message: 'Berhasil menghapus data lahan', info: info});
                    })
                    .catch((err) => {
                        res.json({status: false, code: 400, message: 'Gagal menghapus data lahan', error: err});
                    })
            })
            .catch((err) => {
                res.json({status: false, code: 400, message: 'Gagal menghapus data foto lahan', error: err});
            })
        Kemitraanlahan
            .destroy({
                where: {
                    fk_id_lahan: data.params.id
                }
            })
            .then((info) => {
                info = JSON.parse(JSON.stringify(info));
                console.log(info);
            })
            .catch((err) => {
                res.json({status: false, code: 400, message: 'Gagal menghapus data kemitraan lahan', error: err});
            })
        Pengelolaanlahan
            .destroy({
                where: {
                    fk_id_lahan: data.params.id
                }
            })
            .then((info) => {
                info = JSON.parse(JSON.stringify(info));
                console.log(info);
            })
            .catch((err) => {
                res.json({status: false, code: 400, message: 'Gagal menghapus data pengelolaan lahan', error: err});
            })
    }

    VerifikasiLahanPilihan(data, res) {
        Lahan
            .update({
                status_lahan: 'verif'
            },{
                where: {
                    id: data.params.id
                }
            })
            .then((info) => {
                res.json({status: true, code: 200, message: 'Berhasil memverifikasi lahan', info: info});
            })
            .catch((err) => {
                res.json({status: false, code: 400, message: 'Gagal memverifikasi lahan', error: err});
            })
    }

    EditLahanPilihan(data, res) {
        Lahan
            .update({
                fk_id_desakel: data.body.fk_id_desakel,
                alamat_lengkap_lahan: data.body.alamat_lengkap_lahan,
                longitude_lahan: data.body.longitude_lahan,
                latitude_lahan: data.body.latitude_lahan,
                luasan_lahan: data.body.luasan_lahan,
                pengelolaan_sebelumnya_lahan: data.body.pengelolaan_sebelumnya_lahan,
                deskripsi_lahan: data.body.deskripsi_lahan,
                status_lahan: 'unverif',
                fk_id_publisher: data.body.fk_id_publisher
            },{
                where: {
                    id: data.params.id
                }
            })
            .then((info) => {
                res.json({status: true, code: 200, message: 'Berhasil memperbarui data lahan', info: info});
            })
            .catch((err) => {
                res.json({status: false, code: 400, message: 'Gagal memperbarui data lahan', error: err});
            })
    }
}