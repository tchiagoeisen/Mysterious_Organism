# CodeCademy Project: Mysterious Organism

## Overview
This project contains a series of open-ended requirements which describe the project you’ll be building. 
There are many possible ways to correctly fulfill all of these requirements.

Context: You’re part of a research team that has found a new mysterious organism at the bottom of 
the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds 
that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates 
due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor 
cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. 
Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

## The Project

### Starter code. There are two helper functions: returnRandBase() and mockUpStrand().

DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() is called, it will randomly select a base and return the base ('A','T','C', or 'G').

mockUpStrand() is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.

You’ll use these helper functions later to create your objects that represent P. aequor.

### Function pAequorFactory()

Create a factory function pAequorFactory() that has two parameters:

The first parameter is a number (no two organisms should have the same number).

The second parameter is an array of 15 DNA bases.

pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.

.mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.

For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.

### Function compareDNA()

.compareDNA() has one parameter, another pAequor object.

The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.

### Function willLikelySurvive()
The function .willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.

### Create 30 instances of pAequor
With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.

### Function complementStrand()
Create a .complementStrand() method to the factory function’s object that returns the complementary DNA strand. The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa.

## Credits
This was a CodeCademy project. CodeCademy provided the `returnRandBase()` and `mockUpStrand()` functions, the other were written by me according to the instructions.
