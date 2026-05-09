// ─── Pet-Specific Mock Data ───
export const petCategories = [
  { id: 1, name: 'Dogs', icon: '🐕', slug: 'dogs', description: 'All dog breeds and puppies', petCount: 45, status: 'active' },
  { id: 2, name: 'Cats', icon: '🐱', slug: 'cats', description: 'All cat breeds and kittens', petCount: 32, status: 'active' },
  { id: 3, name: 'Fish', icon: '🐠', slug: 'fish', description: 'Freshwater and saltwater fish', petCount: 78, status: 'active' },
  { id: 4, name: 'Birds', icon: '🐦', slug: 'birds', description: 'Parrots, canaries, finches', petCount: 24, status: 'active' },
  { id: 5, name: 'Reptiles', icon: '🦎', slug: 'reptiles', description: 'Lizards, snakes, turtles', petCount: 12, status: 'active' },
  { id: 6, name: 'Small Animals', icon: '🐹', slug: 'small-animals', description: 'Hamsters, rabbits, guinea pigs', petCount: 18, status: 'active' },
];

export const petBreeds = {
  Dogs: ['Labrador Retriever','German Shepherd','Golden Retriever','Pomeranian','Beagle','Husky','Indie','Shih Tzu','Rottweiler','Pug','Doberman'],
  Cats: ['Persian','Siamese','British Shorthair','Maine Coon','Ragdoll','Bengal','Russian Blue','Sphynx','Indie Cat'],
  Fish: ['Clownfish','Betta','Goldfish','Guppy','Angelfish','Tetra','Oscar','Discus','Arowana'],
  Birds: ['Indian Ringneck','Budgerigar','Cockatiel','Lovebird','Macaw','African Grey','Canary','Finch'],
  Reptiles: ['Leopard Gecko','Ball Python','Bearded Dragon','Red-eared Slider','Chameleon','Corn Snake'],
  'Small Animals': ['Syrian Hamster','Dwarf Hamster','Holland Lop Rabbit','Guinea Pig','Chinchilla','Ferret'],
};

const p = (id, name, cat, breed, age, gender, color, weight, size, price, disc, cost, sku, stock, health, vacc, care, icon, status, featured) => ({
  id, name, category: cat, breed, species: cat, age, dob: '2024-01-01', gender, color, weight, height: '', size,
  price, discount: disc, salePrice: disc ? Math.round(price * (1 - disc/100)) : null, costPrice: cost,
  sku, stock, minStockAlert: Math.max(1, Math.floor(stock * 0.1)),
  healthStatus: health, vaccinationStatus: vacc, vaccinationDate: vacc === 'Complete' ? '2025-09-10' : null,
  vetCertificate: health === 'Healthy', pedigree: ['Dogs','Cats'].includes(cat), pedigreeCert: ['Dogs','Cats'].includes(cat),
  careLevel: care, careInstructions: `Standard care for ${breed}.`,
  images: [icon], featuredImage: icon, videoUrl: '',
  shortDescription: `Beautiful ${breed} - ${name}.`, fullDescription: `${name} is a healthy ${breed} looking for a loving home.`,
  metaTitle: `${breed} - ${name}`, metaDescription: `Adopt ${name}, a ${breed}.`, keywords: `${breed.toLowerCase()}, ${cat.toLowerCase()}`,
  status, featured, publishedOn: 'Apr 2026',
});

export const petsData = [
  p(1,'Bruno','Dogs','Golden Retriever','2 years','Male','Golden','30kg','Large',35000,10,25000,'PET-DOG-001',2,'Healthy','Complete','Moderate','🐕','active',true),
  p(2,'Whiskers','Cats','Persian','1 year','Female','White','4kg','Medium',25000,0,18000,'PET-CAT-001',3,'Healthy','Complete','High','🐱','active',true),
  p(3,'Nemo','Fish','Clownfish','6 months','Male','Orange/White','20g','Small',1500,0,800,'PET-FISH-001',25,'Healthy','N/A','Easy','🐠','active',false),
  p(4,'Polly','Birds','Indian Ringneck','3 years','Male','Green','120g','Medium',12000,15,7000,'PET-BIRD-001',4,'Healthy','Complete','Moderate','🦜','active',true),
  p(5,'Max','Dogs','Labrador Retriever','8 months','Male','Chocolate','22kg','Large',28000,0,20000,'PET-DOG-002',1,'Healthy','Partial','Moderate','🐕‍🦺','active',false),
  p(6,'Luna','Cats','Siamese','1.5 years','Female','Seal Point','3.5kg','Medium',22000,5,15000,'PET-CAT-002',2,'Healthy','Complete','Moderate','🐱','active',true),
  p(7,'Goldie','Fish','Goldfish','4 months','Unknown','Gold','30g','Small',500,0,200,'PET-FISH-002',50,'Healthy','N/A','Easy','🐟','active',false),
  p(8,'Rocky','Dogs','German Shepherd','1 year','Male','Black & Tan','28kg','Large',40000,0,30000,'PET-DOG-003',1,'Healthy','Complete','High','🐕','active',true),
  p(9,'Coco','Birds','Cockatiel','2 years','Female','Grey/Yellow','90g','Small',8000,0,4500,'PET-BIRD-002',6,'Healthy','Complete','Easy','🐦','active',false),
  p(10,'Scales','Reptiles','Leopard Gecko','1 year','Male','Yellow/Spotted','60g','Small',6000,10,3000,'PET-REP-001',3,'Healthy','N/A','Easy','🦎','active',false),
  p(11,'Bella','Dogs','Beagle','6 months','Female','Tricolor','8kg','Medium',20000,0,14000,'PET-DOG-004',2,'Healthy','Partial','Moderate','🐕','active',false),
  p(12,'Bubbles','Fish','Betta','3 months','Male','Royal Blue','5g','Small',800,0,300,'PET-FISH-003',15,'Healthy','N/A','Easy','🐟','active',true),
  p(13,'Nibbles','Small Animals','Syrian Hamster','4 months','Female','Golden','130g','Small',1200,0,500,'PET-SA-001',8,'Healthy','N/A','Easy','🐹','active',false),
  p(14,'Shadow','Cats','Maine Coon','3 years','Male','Silver Tabby','7kg','Large',45000,0,32000,'PET-CAT-003',1,'Healthy','Complete','Moderate','🐱','active',true),
  p(15,'Raja','Reptiles','Bearded Dragon','2 years','Male','Orange/Sand','400g','Medium',15000,0,9000,'PET-REP-002',2,'Healthy','N/A','Moderate','🦎','active',false),
];

export const healthRecords = [
  { id: 1, petId: 1, petName: 'Bruno', petCategory: 'Dogs', recordType: 'Vaccination', description: 'Rabies Vaccine', date: '2024-09-10', vet: 'Dr. Ramesh Kumar', status: 'Complete', nextDue: '2025-09-10', documents: true },
  { id: 2, petId: 1, petName: 'Bruno', petCategory: 'Dogs', recordType: 'Vaccination', description: 'DHPP Booster', date: '2024-08-05', vet: 'Dr. Ramesh Kumar', status: 'Complete', nextDue: '2025-08-05', documents: true },
  { id: 3, petId: 2, petName: 'Whiskers', petCategory: 'Cats', recordType: 'Health Check', description: 'Annual wellness exam', date: '2025-07-15', vet: 'Dr. Priya Menon', status: 'Complete', nextDue: '2026-07-15', documents: true },
  { id: 4, petId: 4, petName: 'Polly', petCategory: 'Birds', recordType: 'Vaccination', description: 'PBFD Test', date: '2025-06-12', vet: 'Dr. Anand Rao', status: 'Complete', nextDue: '2026-06-12', documents: true },
  { id: 5, petId: 5, petName: 'Max', petCategory: 'Dogs', recordType: 'Vaccination', description: 'Parvo/Distemper - Dose 2', date: '2026-02-10', vet: 'Dr. Ramesh Kumar', status: 'Partial', nextDue: '2026-04-10', documents: true },
  { id: 6, petId: 8, petName: 'Rocky', petCategory: 'Dogs', recordType: 'Deworming', description: 'Routine deworming', date: '2026-01-20', vet: 'Dr. Suresh Pillai', status: 'Complete', nextDue: '2026-04-20', documents: false },
  { id: 7, petId: 6, petName: 'Luna', petCategory: 'Cats', recordType: 'Vaccination', description: 'FVRCP + Rabies', date: '2025-11-10', vet: 'Dr. Priya Menon', status: 'Complete', nextDue: '2026-11-10', documents: true },
  { id: 8, petId: 14, petName: 'Shadow', petCategory: 'Cats', recordType: 'Health Check', description: 'Pre-sale exam', date: '2026-03-10', vet: 'Dr. Priya Menon', status: 'Complete', nextDue: null, documents: true },
  { id: 9, petId: 10, petName: 'Scales', petCategory: 'Reptiles', recordType: 'Health Check', description: 'Parasite screening', date: '2026-04-01', vet: 'Dr. Anand Rao', status: 'Complete', nextDue: '2026-10-01', documents: true },
  { id: 10, petId: 11, petName: 'Bella', petCategory: 'Dogs', recordType: 'Vaccination', description: 'Parvo - Dose 1', date: '2026-03-15', vet: 'Dr. Ramesh Kumar', status: 'Partial', nextDue: '2026-05-15', documents: true },
];

export function formatPetCurrency(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}
