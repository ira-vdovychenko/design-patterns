class Tesla {
    info() {
        return 'It is a Tesla car!';
    }
    accept(visitor) {//передає відвідувачу контекст виклику класу 
        visitor(this);
    }
}
class BMW {
    info() {
        return 'It is a BMW car!';
    }
    accept(visitor) {
        visitor(this);
    }
};
function exportVisitor(auto) { // нові операції
    if (auto instanceof Tesla)
        auto.export = console.log(`Exported data: ${auto.info()}`);
    if (auto instanceof BMW)
        auto.export = console.log(`Exported data: ${auto.info()}`);
};
const tesla = new Tesla();
const bmw = new BMW();

console.log(tesla.accept(exportVisitor));
console.log(bmw.accept(exportVisitor));