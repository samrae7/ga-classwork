require_relative '../lib/bank'

describe Bank do

  let(:bank) {Bank.new('Bank of Jeremy')}

  it 'creates new bank object' do
    expect(bank).to_not eq nil
    # OR expect(bank.class).to eq Bank
    # OR expect(bank.instance_of? Bank).to eq true
  end

  it 'should have a name attached' do
    expect(bank.name).to eq 'Bank of Jeremy'
  end

  it 'creates an account' do
    bank.create_account('Jeremy',1)
    expect(bank.accounts['Jeremy']).to eq 1
  end

  it 'adds money to an account' do
    bank.create_account('Jeremy', 1)
    bank.deposit('Jeremy', 499)
    expect(bank.accounts['Jeremy']).to eq 500
  end

  it 'returns balance of account' do
    bank.create_account('Jeremy', 300)
    expect(bank.balance('Jeremy')).to eq 300
  end

  it 'allows a customer to withdraw money' do
    bank.create_account('Jeremy', 250)
    bank.withdraw('Jeremy', 200)
    expect(bank.balance('Jeremy')).to eq 50

  end

end