class Main {
  public static void main(String[] args) {
    (new Main()).init();
  }

  void init(){

        
  }

    /*
      Problem 1:      
      Write a function groupSavings that takes number of tickets wanting 
      to purchase. Return the total cost by apply the following discount:
      1 to 8 tickets  : each ticket cost $11,
      9 to 16 tickets : each ticket cost $10.50
      over 16 tickts  : each ticket cost $8.50
    */
double groupSavings(int Tickets){
  if(ticktes>==1 && tickets<=8){
    return 11*tickets;
  }
}
  double groupSavings(int Tickets){
  if(ticktes>==9 && tickets<=16){
    return 10.50*tickets;
  }
  }
  double groupSavings(int Tickets){
  if(tickets<=16){
    return 8.50*tickets;
  }
  }
  /*
      Write a function groceryDiscount that takes the total amount spent at 
      a grocery store and the number of cans of beans purchased.
      Depending on the total amount and number of can of
      beans purchase, you get a savings on their total bill.
      Return the savings amount:
        Spent $100 to $200 and purchase at least 3 cans of 
        beans: $10 savings
        Spent over $200 and purchase more than 4 cans 
        of beans: $25 savings
        Otherwise: $0 savings.
    */
double groceryDiscount(double total, int cans){
    if ((100<= total && total <=200) && cans == 3){
       double amount = (total + cans) - 10);
       return amount;
    }else if(total > 200 && cans > 4){
      double amount = total + (cans*10) - 25;
      return amount;
    }else{
      double amount = (total + cans);
    }
  }

}

