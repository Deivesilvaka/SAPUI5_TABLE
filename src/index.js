
// 'Importação' das classes.
const { App, Page, Table, Column, ColumnListItem, Text, Label, LabelDesign,
        Toolbar } = sap.m

const { model: { json: { JSONModel } } } = sap.ui

// -> Trás o core da aplicação.
const core = sap.ui.getCore()

// -> onload.
core.attachInit(start) // -> Event emiter cagado.

function cleanData(datas) {
    const newData = datas.map( user => ({
        name: user.name,
        username: user.username,
        email: user.email
    }))

    return newData
}

// -> CallBack chamada após o evento.
async function start() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = cleanData(await response.json())

    const application = new App('peoples_list', {
        initialPage: 'initialPage'
    })

    const table = new Table({
        inset:true,
        width:'83%',
        headerToolbar: new Toolbar({
            content: new Label({
                text: 'Lista de usuários',
                design: LabelDesign.Bold
            })
        })
    })

    const headers = ["Nome", "Nome de usuário", "Email"]
    headers.map( text => new Column({
        header: new Label({
            text: text,
            design: LabelDesign.Bold
        })
    })).map( column => table.addColumn(column) )

    const Model = new JSONModel()
    Model.setData(data)
    table.setModel(Model)

    const cells = Object.keys(data[0]).map( item => new Text({
        text: `{${item}}`
    }))

    table.bindItems('/', new ColumnListItem({
        cells
    }))

    const initialPage = new Page('initialPage', {
        title: 'Lista de Usuários',
        content: table
    })

    application.addPage(initialPage).placeAt('content')
}