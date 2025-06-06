let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = {
        'abrir': 'not_announcement',
        'cerrar': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        await conn.reply(m.chat, `*${emojis} Elija una opción.*\n\n*${usedPrefix + command}* abrir\n*${usedPrefix + command}* cerrar`, m, rcanal)
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *<abrir/cerrar>*']
handler.tags = ['gc']
handler.command = ['group', 'grupo'] 
handler.admin = true
handler.botAdmin = true

export default handler