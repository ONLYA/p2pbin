/**
 * This jQuery plugin resizes a textarea to adapt it automatically to the content.
 * @author Amaury Carrade
 * @version 1.1
 *
 * @example $('textarea').autoResize({
 *              animate:   {                            // @see .animate()
 *              	enabled:    true,                   // Default: false
 * 					duration:   'fast',                 // Default: 100
 *					complete:   function() {},          // Default: null
 *					step:       function(now, fx) {}    // Default: null
 *              },
 *              maxHeight: '500px'                      // Default: null (unlimited)
 *          });
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lessier General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lessier General Public License for more details.
 *
 * You should have received a copy of the GNU Lessier General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */