/*
 * @Author: Apoorv Vardhan 
 * @Date: 2019-09-21 22:46:08 
 * @Last Modified by: Apoorv Vardhan
 * @Last Modified time: 2019-09-21 23:01:08
 */
import Component from '@ember/component';

const GreekGods = [
    {
      "name": "Zeus",
      "desc": "Zeus is the sky and thunder god in ancient Greek religion, who rules as king of the gods of Mount Olympus"
    },
    {
      "name": "Ares",
      "desc": "Ares is the Greek god of war. He is one of the Twelve Olympians, the son of Zeus and Hera. In Greek literature, he often represents the physical or violent and untamed aspect of war"
    },
    {
      "name": "Aphrodite",
      "desc": "Aphrodite is an ancient Greek goddess associated with love, beauty, pleasure, passion and procreation."
    }
  ];

export default Component.extend({
    gods: GreekGods
});
