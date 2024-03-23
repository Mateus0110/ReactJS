export class Company {
  public readonly name: string;
  private readonly collaborators: Collaborator[] = [];
  protected readonly NationalRegisterLegalEntities: string;

  constructor(name: string, nationalRegisterLegalEntities: string) {
    this.name = name;
    this.NationalRegisterLegalEntities = nationalRegisterLegalEntities;
  }

  public addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator)
  }

  public showCollaborators(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

export class Collaborator {
  constructor(
    public readonly name: string,
    public readonly surname: string,
  ) {
    this.name = name;
    this.surname = surname;
  };
}

const company1 = new Company('MW Companty S/A', '11.111.111/0001-11');

const collaborator1 = new Collaborator('João', 'Silva');
const collaborator2 = new Collaborator('Mônica', 'Cardoso');
const collaborator3 = new Collaborator('Maria', 'Miranda');

company1.addCollaborator(collaborator1);
company1.addCollaborator(collaborator2);
company1.addCollaborator(collaborator3);
company1.addCollaborator({
  name: 'Carlos',
  surname: 'Sales'
});

console.log(company1);
console.log(company1.showCollaborators());
