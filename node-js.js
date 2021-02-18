

/*  Nodo de estructura */
const Node = (data, next, back) => ({
    _data: data,
    _next: next,
    _back: back
});

module.exports = { Node };