class MetadataParser{
    #_version;
    #_channel;
    #_keyField;
    constructor({_version,_channel,_keyField})
    {
        this.#_version=_version;
        this.#_channel=_channel;
        this.#_keyField=_keyField;
    }
    getVersion()
    {
        return this.#_version;
    }
    getChannel()
    {
        return this.#_channel;
    }
    getKeyfield()
    {
        return this.#_keyField;
    }
    setVersion(value)
    {
        this.#_version=value;
    }
    setChannel(value)
    {
        this.#_channel=value;
    }
    setKeyField(value)
    {
        this.#_keyField=value;
    }
    static getKeyFields(arr)
    {
        return arr.map((element)=>{
            return element.getKeyfield();
        });
    }
}

const parser=new MetadataParser({_keyField:'a',_channel:'b',_version:1});

parser.setChannel('d');
parser.setKeyField('f');
console.log(parser.getVersion());
MetadataParser.getKeyFields([new MetadataParser({_keyField:1,_version:2}),new MetadataParser({_keyField:2,_version:5})])